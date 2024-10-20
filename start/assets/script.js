const App = Vue.createApp({
    // methods and content go here
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Harrison',
            productName: 'Coke', 
            productDescription: 'A nice, cold soda filled to the brim with the thirst-quenching taste and feel of coke',
            spaceShip: 'assets/images/spaceship-5730066-1284x856.jpg',
            spaceShipDescription: 'Hello there!',
            spaceShipStyle: {
                'border-radius': '15px',
            }
        };
    }
});
App.mount('#app');
