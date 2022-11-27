let nombreUser = prompt('Ingresá tu nombre')
let contraseñaGuardada = 'duki';
let continuar = true;
let contraseñaUser = prompt('Ingresá tu contraseña')

while(continuar){
    if(contraseñaUser===contraseñaGuardada){
    alert('Bienvenidx '+ (nombreUser))
    continuar =false;
    break;
}alert ('Contraseña incorrecta');
 contraseñaUser = prompt('Ingresá tu contraseña');
}


alert('El producto cuesta $6000')
const precio = 6000
let dinero = parseInt(prompt ('¿Con cuánto dinero contas?'));
let credito = 2000 
let disponible = dinero+credito;



if (dinero>=precio){
    alert('Podés comprar')
}else{
   let pregunta = prompt('No podés comprar, ¿querés un crédito de $2000?') 
    if (pregunta === 'si' && disponible >= precio){
        alert('Podes comprar')
        
    }else{
        alert('No podés comprar')
    }
}
