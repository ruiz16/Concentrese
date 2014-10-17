window.onload = function()
{
	inicio();
}
function inicio()
{

	Pescaditos = new Array (21);
	
	var Valor1 =0;
	var Valor2 =0;
	var turno =0;

	function CargarAleatorio()
	{
		var i = 0;
		var datos = "";

	// Los dos ciclos siguientes cargan las imagenes
		for(i=0;i<11;i++)
		{
			Pescaditos[i]=i+".jpg";
		}

		var repetido=1;
		for(i=11;i<21;i++)
		{
			Pescaditos[i]=repetido+".jpg";
			repetido++
		}

		var aux="";
		// aca se va  a intercambiar
		for(i=1;i<21;i++)
		{
			var aleatorio = Math.round(Math.random()*19)+1;// multiplicamos por 19 ya que solo se necesitan 20 imagenes
			aux = Pescaditos[i]; 
			Pescaditos[i] = Pescaditos[aleatorio]; 
			Pescaditos[aleatorio] = aux;
		}

		for(i=1;i<21;i++)
		{
			nom_div(i+"a").src = "resized fichas/"+Pescaditos[i];
		}
	}

	function limpiar()
	{
		for(i=1;i<21;i++)
		{
			nom_div(i+"a").src = "resized fichas/0.jpg";
		}
	}


	for(i=1;i<21;i++)
	{
		nom_div(i+"a").addEventListener('click', function(event)	
		{
			var ClicImagen = event.target.id.split("a");
			if(turno == 0)
			{
				Valor1=ClicImagen[0];
				turno = 1;
				console.log("el valor 1 es: "+Valor1);
				nom_div(Valor1+"a").src = "resized fichas/"+Pescaditos[Valor1];

			}else
			{
				Valor2=ClicImagen[0];
				turno = 0;
				console.log("el valor 2 es: "+Valor2);
				nom_div(Valor2+"a").src = "resized fichas/"+Pescaditos[Valor2];
				setTimeout(Comparar, 500); // se hace un retardo de 500 milisegundos y luego se llama a la funcion Comparar
				
				function Comparar() // esta funcion compara las imagenes y si son iguales las deja como esta, si son diferentes las oculta imprimiendo la img 0.jpg
				{
					if(Pescaditos[Valor1] != Pescaditos[Valor2])
					{
						//alert('las imagenes no coinciden');					
						nom_div(Valor1+"a").src = "resized fichas/0.jpg";
						nom_div(Valor2+"a").src = "resized fichas/0.jpg";
					}	
				}								
			}			
			
		});
	}
	

	// al hacer clic  en la division limpiar que es el id de un boton en html
	//llamamos la funcion limpiaEscenario()
	nom_div("hide").addEventListener('click', function(event)
	{
		limpiar();
	});

	nom_div("Start").addEventListener('click', function(event)
	{
		CargarAleatorio();
	});

	function nom_div(div)
	{
	return document.getElementById(div);
	}	
}

