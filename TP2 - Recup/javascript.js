let texto = {
    data(){
        return{
            stringIngresado:"",
            ingresoCorrecto: null,
            volveAlInicio: null,
            isActive: null
        }
    },

    methods:{
        submitFrom(){

            let alphaExp = /^[a-zA-Z]+$/;

            if(this.stringIngresado === '')
            {
                //Chequeamos primero que no este vacio
                alert('El campo no puede estar vacio')
            } 
            else
            {
                if(this.stringIngresado.match(alphaExp))
                {
                   /*
                    Si el codigo llego aca llamo al metodo para verificar las letras
                    del string.
                   */
                    alert('Ingreso de unicamente letras validado');
                    
                    let contador  = 0;
                    let arriba    = 0;
                    let derecha   = 0;
                    let abajo     = 0;
                    let izquierda = 0;

                    for(let letter of this.stringIngresado)
                    {
                        if(letter ==='n' || letter === 's' || letter ==='e' || letter ==='o')
                        {
                            contador++;
                            if(letter === 'n') arriba++;
                            if(letter === 'o') izquierda--;
                            if(letter === 's') abajo--;
                            if(letter === 'e') derecha++;
                        } 
                        else
                        {
                            contador = 0;
                        }
                    }

                    let suma = (arriba) + (izquierda) + (abajo) + (derecha);

                    if (suma === 0)
                    {
                        this.volveAlInicio = true;
                    } 
                    else
                    {
                        this.volveAlInicio = false;
                    }
                    
                    if(contador === this.stringIngresado.length) 
                    {
                        alert('Ingreso de caracteres especiales validado');
                        this.isActive = true;
                        this.ingresoCorrecto = true;
                    } 
                    else
                    {
                        alert('El ingreso de caracteres especiales no fue validado');
                        this.isActive = false;
                        this.ingresoCorrecto = false;
                    }            
                }            
                else
                {
                    alert('Lo siento, el texto solo debe contener letras \nIntente nuevamente')
                }
            }
        },
    }
}

const app = Vue.createApp(texto);
const appMontada = app.mount('#app')