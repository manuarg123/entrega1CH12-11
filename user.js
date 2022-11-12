class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `El nombre completo es ${this.nombre} ${this.apellido}`
    }

    getMascotas(){
        return this.mascotas
    }
    
    addMascota(string){
        if(typeof this.mascotas == "object"){
            this.mascotas.push(string);
        }else{
            console.log("La variable mascotas debe ser un array");
        }
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        if(typeof nombre == 'string' && typeof autor == 'string'){
            this.libros.push( {'nombre' : nombre, 'autor': autor})
        }else{
            console.log("Debe ingresar cadenas de texto como parámetros")
        }
    }

    getBookNames(){
        let libros = [];
        for(let i = 0; i < this.libros.length; i++){
            libros.push(this.libros[i].nombre)
        }
        return [libros]
    }
   
}

user = new Usuario('Manuel', 'Rivas', [{'nombre' : 'Crimen y Castigo', 'autor' : 'Dovtoieski'}], ['Perro', 'Gato', 'Pez'])

console.log("Usuario sin utilizar sus métodos: ")
console.log(user)
console.log(" ")
console.log(user.getFullName())
console.log(" ")
console.log("Cantidad de mascotas netas del usuario: ")
console.log(user.countMascotas())
console.log(user.getMascotas())
user.addMascota("Pajaro")//Agrego una mascota al usuario
console.log("Nueva cantidad de mascotas: ")
console.log(user.countMascotas())
console.log(user.getMascotas())

user.addBook("El Tunel","Sábato");
console.log(" ")
console.log("Libros del usuario: ")
console.log(user.getBookNames())