let device;
let server;
let characteristic;
const PUBLIC_SERVICE_UUID = '';
const PUBLIC_CHARACTERISTIC_UUID = '';

/**
 * Connects to a BLE device.
 * @returns {Promise<BluetoothDevice>} The connected Bluetooth device.
 * @throws Will throw an error if unable to connect to the device.
 */
export async function connect() {
	
	device = await navigator.bluetooth.requestDevice({
		acceptAllDevices: true,
	});
	
	// server = await device.gatt.connect();
	//
	// characteristic = await server
	// 	.getPrimaryService(PUBLIC_SERVICE_UUID)
	// 	.then((service) => service.getCharacteristic(PUBLIC_CHARACTERISTIC_UUID));
	// return device;
	
}

// /**
//  * Disconnects from a BLE device.
//  * @param {BluetoothDevice} device - The device to disconnect.
//  */
// export function disconnect(device) {
// 	if (device) {
// 		device.gatt.disconnect();
// 	}
// }

// Check if Bluetooth is available
if (navigator.bluetooth) {
	try {
		const availability = await navigator.bluetooth.getAvailability();
		if (availability) {
			console.log('Bluetooth is available');
		} else {
			console.log('Bluetooth is not available');
		}
	} catch (error) {
		console.error('Error checking Bluetooth availability:', error);
	}
}


document.addEventListener('DOMContentLoaded', () => {
	
	
	async function handleClick() {
		await connect();
	}
	
	// Add event listeners here
	document.getElementById('deals').addEventListener('click', handleClick);
});