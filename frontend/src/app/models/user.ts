export class User {
	public firstName: string = '';
	public lastName: string = '';
	public email: string = '';
	public rut: string = '';
	
	constructor(data: any = null) {
		if (data) {
			this.firstName = data.name;
			this.lastName = data.phone;
			this.email = data.email;
			this.rut = data.message;
		}
	}

	public toJSON(): any {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			rut: this.rut,
		}
	}
}