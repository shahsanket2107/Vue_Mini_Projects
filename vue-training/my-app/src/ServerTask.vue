
<template>
    <div>
        <header1> </header1>
        <hr>
        <div class="column">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <footer1> </footer1>
    </div>
    
</template>


<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerList from './ServerList.vue';
import ServerDetails from './ServerDetails.vue';

export default {
    components:{
        'header1': Header,
        'footer1': Footer,
        'server-list': ServerList,
        'server-details':ServerDetails
    }
}

</script>
