<template>
  <div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="card rounded shadow">
                <div class="card-header">DHT11 Data Logger</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Temperature</th>
                                <th>Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dht, index) in dhts.data" :key="index">
                                <td>{{dht.id}}</td>
                                <td>{{dht.temperature}}</td>
                                <td>{{dht.humidity}}</td>
                            </tr>
                        </tbody>
                        <button class="btn btn-sm btn-outline-success"
                                        @click.prevent="updateON()">ON</button>
                        <button class="btn btn-sm btn-outline-danger"
                                        @click.prevent="updateOFF()">OFF</button>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div> 
</template>

<script>
// import TutorialDataService from "../services/TutorialDataService";

import axios from 'axios';
import {onMounted, ref} from 'vue'

export default {
    setup() {

        let dhts = ref([])

        onMounted(() => {
            axios.get('http://127.0.0.1:8000/api/v1/umeng/dht')
            .then((result) => {
                dhts.value = result.data
            }).catch((err) => {
                console.log(err.response)
            })
        });

        function updateON(ON){
            axios.put(
                `http://127.00.0.1:8000/api/v1/umeng/led/1`, {'status': "ON"}
            ).then(() => {
                console.log("berhasil")
            }).catch((err) => {
                console.log(err.response.data)
            })
        }

        function updateOFF(){
            axios.put(
                `http://127.00.0.1:8000/api/v1/umeng/led/1`, {'status': "OFF"}
            ).then(() => {
                console.log("berhasil")
            }).catch((err) => {
                console.log(err.response.data)
            })
        }

        return {
            dhts,
            updateON,
            updateOFF
        }
    }
}
</script>