"use strict";
(function () {
	class Person {
		constructor(name, surname) {
			// if (!name || !surname) {
			// 	throw new Error('Fields name and surname are required');
			// };
			this.name = name;
			this.surname = surname;
		};
		getData() {
			return `${this.name} ${this.surname}`;
		};
	};

	class Seat {
		constructor(number = Math.floor( 91 * Math.random() + 10 ), category = "e") {
			// if ( !['e','b'].includes(category) ) {
			// 	throw new Error('Invalid category input');
			// }
			this.number = number;
			this.category = category;
		};
		getData() {
			return `${this.number} ${this.category.toUpperCase()}`;
		};
	};

	class Passenger {
		constructor(person, seat) {
			// if (!person ||  !(person instanceof Person)) {
			// 	throw new Error('Invalid person input');
			// }
			// if (!seat ||  !(seat instanceof Seat)) {
			// 	throw new Error('Invalid seat input');
			// }
			this.person = person;
			this.seat = seat;
		};
		getData() {
			return `${this.seat.getData()} ${this.person.getData()}`;
		};
	};
	
	class Flight {
		constructor(relation, date) {
			// if (!relation || !date) {
			// 	throw new Error('Fields relation and date are required');
			// }
			this.relation = relation;
			this.date = new Date(date);
			this.listOfPassengers = [];
		};
		addPassenger(passenger) {
			// if (!passenger || !(passenger instanceof Passenger)) {
			// 	throw new Error('Invalid passenger data');
			// }
			this.listOfPassengers.push(passenger);
		};
		getData() {
			let year = this.date.getFullYear();
			let month = this.date.getMonth() + 1;
			let day = this.date.getDate();
			let result = `  ${day}.${month}.${year}, ${this.relation}
			`;
			this.listOfPassengers.forEach(function(passenger) {
				result += `     ${passenger.getData()}
				`;
			});
			return result;
		};
	};
	
	class Airport {
		constructor() {
			this.name = "Nikola Tesla";
			this.listOfFlights = [];
		};
		addFlight(flight) {
			// if (!flight || !(flight instanceof Flight)) {
			// 	throw new Error('Invalid flight data');
			// }
			this.listOfFlights.push(flight);
		};
		getPassengersNumber() {
			let count = 0;
			this.listOfFlights.forEach(function(flight) {
				count += flight.listOfPassengers.length;
			});
			return count;
		}
		getData() {
			let result = `Airport: ${this.name}, total passengers: ${this.getPassengersNumber()}
            `;
			this.listOfFlights.forEach(function(flight) {
				result += flight.getData();
			});
			return result;
		};
	};
	


	function createFlight(relation, date) {
		return new Flight(relation, date);
	}
	function createPassenger(firstName, lastName, seatNumber, category) {
		let person = new Person(firstName, lastName);
		let seat = new Seat(seatNumber, category);
		return new Passenger(person, seat);
	}
	
	//testing
	try {
		let nikolaTesla = new Airport()
		let belgradeParis = createFlight("Belgrade - Paris", "Oct 25 2017")
		let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
		let passenger1 = createPassenger("Dario", "Stamenkovic", 67, "b")
		let passenger2 = createPassenger("Cersei", "Lannister", 62, "b")
		let passenger3 = createPassenger("Daenerys", "Targaryen", 14)
		let passenger4 = createPassenger("Nikola", "Colovic")
		belgradeParis.addPassenger(passenger1)
		belgradeParis.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		nikolaTesla.addFlight(belgradeParis)
		nikolaTesla.addFlight(barcelonaBelgrade)
		console.log(nikolaTesla.getData());
	} catch (error) {
		console.log(`Error message: ${error.message}`);
	}
})()