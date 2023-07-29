/** @type {import('./$types').PageLoad} */
export async function load() {
	let mapSRC =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13844.767578556146!2d30.86346263342614!3d-29.829882328380904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6fe49e636aa4f%3A0xd483671eb8effdd1!2s5+Gordon+Rd%2C+Sarnia%2C+Pinetown%2C+3615!5e0!3m2!1sen!2sza!4v1528644089426';

	return { mapSRC };
}
