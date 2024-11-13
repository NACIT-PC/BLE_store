let device;
let server;
let characteristic;
const PUBLIC_SERVICE_UUID = '';
const PUBLIC_CHARACTERISTIC_UUID = '';

/**
 * Send data to a BLE device.
 * @param {string} studentNumber - The data to be sent.
 * @throws Will throw an error if unable to send data.
 */
export async function sendData(studentNumber) {
	let server;
	try {
		server = await device.gatt.connect();
		const service = await server.getPrimaryService(PUBLIC_SERVICE_UUID);
		const characteristic = await service.getCharacteristic(PUBLIC_CHARACTERISTIC_UUID);

		// Extract the studentNumber value from the object and encode it
		// Assuming data has a studentNumber property
		const dataArray = new TextEncoder().encode(studentNumber);
		await characteristic.writeValue(dataArray);
	} finally {
		if (server) {
			await server.disconnect(device);
		}
	}
}

/**
 * Connects to a BLE device.
 * @returns {Promise<BluetoothDevice>} The connected Bluetooth device.
 * @throws Will throw an error if unable to connect to the device.
 */
export async function connect() {

	device = await navigator.bluetooth.requestDevice({
		acceptAllDevices: true,
	});

	server = await device.gatt.connect();

	characteristic = await server
		.getPrimaryService(PUBLIC_SERVICE_UUID)
		.then((service) => service.getCharacteristic(PUBLIC_CHARACTERISTIC_UUID));
	return device;

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


document.addEventListener('DOMContentLoaded', () => {


	async function handleClick() {
		await connect();
	}

	// Add event listeners here
	document.getElementById('deals').addEventListener('click', handleClick);
});