//elementos a usar
const trivStart = document.getElementById('player-data');
const startButton = document.getElementById('start');
const cat1 = document.getElementById('categ1');
const cat2 = document.getElementById('categ2');
const cat3 = document.getElementById('categ3');
const cat4 = document.getElementById('categ4');
const cat5 = document.getElementById('categ5');
//---------------------------------------------------------
const lvl1 = document.getElementById('lvl1');
const opt1 = document.getElementById('place1');
const opt2 = document.getElementById('place2');
const opt3 = document.getElementById('place3');
const opt4 = document.getElementById('place4');
const lvl2 = document.getElementById('lvl2');
const opt5 = document.getElementById('place5');
const opt6 = document.getElementById('place6');
const opt7 = document.getElementById('place7');
const opt8 = document.getElementById('place8');
const lvl3 = document.getElementById('lvl3');
const opt9 = document.getElementById('place9');
const opt10 = document.getElementById('place10');
const opt11 = document.getElementById('place11');
const opt12 = document.getElementById('place12');
const lvl4 = document.getElementById('lvl4');
const opt13 = document.getElementById('place13');
const opt14 = document.getElementById('place14');
const opt15 = document.getElementById('place15');
const opt16 = document.getElementById('place16');
const lvl5 = document.getElementById('lvl5');
const opt17 = document.getElementById('place17');
const opt18 = document.getElementById('place18');
const opt19 = document.getElementById('place19');
const opt20 = document.getElementById('place20');
//---------------------------------------------------

//despliega la primera ronda
startButton.addEventListener('click', () => {
    const player = document.getElementById('player').value;
    if (player && player !== " ") {
        trivStart.style.display = "none";
        cat1.style.display= "flex";
    }
})

executed = false;//bandera anti dobleclick

const startGame = () =>{//inicializa el juego

    if(!executed) {

        const playerData = {//datos del jugador en forma de objeto

            name: document.getElementById('player').value,
            score: 0
        
        }
    
        const tableScore = document.getElementById('score');
        tableScore.innerHTML = `Score: ${playerData.score}`;//muestra el puntaje actual
    
        //preguntas y respuestas en objeto de objetos...
        const categ_q = {
    
            general: {
                q1: {
                    question: "Cuál es el pais con mas habitantes del mundo?",
                    answ: "China",
                    wrong1: "Rusia",
                    wrong2: "Estados Unidos",
                    wrong3: "India",
                },
                q2: {
                    question: "Cual es el edificio mas alto del mundo?",
                    answ: "Burj Khalifa",
                    wrong1: "Torre Shanghai",
                    wrong2: "One World Trade Center",
                    wrong3: "Centro de finanzas Ping An",
                },
                q3: {
                    question: "Cual es el pais con menos habitantes del mundo?",
                    answ: "Ciudad del Vaticano",
                    wrong1: "Iran",
                    wrong2: "Turquia",
                    wrong3: "Cuba",
                },
                q4: {
                    question: "Cual es el oceano mas grande del mundo?",
                    answ: "Oceano Pacifico",
                    wrong1: "Oceano Atlantico",
                    wrong2: "Oceano Indico",
                    wrong3: "Oceano Artico",
                },
                q5: {
                    question: "Cuantos lados tiene un heptagono?",
                    answ: "7",
                    wrong1: "6",
                    wrong2: "5",
                    wrong3: "4",
                }
            },
            history: {
                q1: {
                    question: "En que año descubrio Colon America?",
                    answ: "1492",
                    wrong1: "1496",
                    wrong2: "1502",
                    wrong3: "1506",
                },
                q2: {
                    question: "En qué guerra participó Juana de Arco?",
                    answ: "Guerra de los 100 años",
                    wrong1: "Guerra de los 1000 días",
                    wrong2: "Guerras napoleónicas",
                    wrong3: "Primera cruzada",
                },
                q3: {
                    question: "Quien fue el primer emperador romano?",
                    answ: "Cesar Augusto",
                    wrong1: "Julio Cesar",
                    wrong2: "Neron",
                    wrong3: "Caligula",
                },
                q4: {
                    question: "En qué año cayó el muro de Berlin?",
                    answ: "1989",
                    wrong1: "1990",
                    wrong2: "1979",
                    wrong3: "1960",
                },
                q5: {
                    question: "Qué inicio la segunda guerra mundial?",
                    answ: "El asesinato del archiduque Francisco Fernando",
                    wrong1: "Alemania invadió Polonia",
                    wrong2: "Hitler invadió Austria",
                    wrong3: "Japón Atacó a Estados Unidos",
                }
            },
            sports: {
                q1: {
                    question: "Cuantos kilometros de distancia mide una maraton?",
                    answ: "42.16 km",
                    wrong1: "45 km",
                    wrong2: "43.45 km",
                    wrong3: "40 km",
                },
                q2: {
                    question: "Cuales son los colores del anillo de los juegos olimpicos?",
                    answ: "Azul, Rojo, Amarillo, Verde, Negro",
                    wrong1: "Azul, Rojo, Amarillo, Verde, Violeta",
                    wrong2: "Azul, Rojo, Amarillo, Verde, Naranja",
                    wrong3: "Azul, Rojo, Amarillo, Verde, Rosa",
                },
                q3: {
                    question: "Por que deporte se conoce a los medias rojas de boston?",
                    answ: "Beisbol",
                    wrong1: "Baloncesto",
                    wrong2: "Futbol",
                    wrong3: "Voleibol",
                },
                q4: {
                    question: "De que pais es el exboxeador Manny Pacquiao?",
                    answ: "Filipinas",
                    wrong1: "Vietnam",
                    wrong2: "China",
                    wrong3: "Corea",
                },
                q5: {
                    question: "Cada cuantos años se realizan los juegos olimpicos?",
                    answ: "Cada 4 años",
                    wrong1: "Cada 3 años",
                    wrong2: "Cada 2 años",
                    wrong3: "Cada año",
                }
            },
            geography: {
                q1: {
                    question: "Cual es el estado mas grande de estados unidos?",
                    answ: "Alaska",
                    wrong1: "Texas",
                    wrong2: "Utah",
                    wrong3: "Washington",
                },
                q2: {
                    question: "Que rio europeo fluye a traves de 10 paises diferentes?",
                    answ: "Rio Danubio",
                    wrong1: "Rio Sena",
                    wrong2: "Rio Loira",
                    wrong3: "Rio Ural",
                },
                q3: {
                    question: "En que pais se encuentra Cracovia?",
                    answ: "Polonia",
                    wrong1: "Dinamarca",
                    wrong2: "Rusia",
                    wrong3: "Moldavia",
                },
                q4: {
                    question: "Cual de estas es una cordillera de Africa?",
                    answ: "Cordillera del Atlas",
                    wrong1: "Cordillera de Cantabrica",
                    wrong2: "Cordillera Bética",
                    wrong3: "Cordillera del Pamir",
                },
                q5: {
                    question: "Si vas a esquiar a Sankt Moritz, en qué país estas?",
                    answ: "Suiza",
                    wrong1: "Alemania",
                    wrong2: "Belgica",
                    wrong3: "Dinamarca",
                }
            },
            science: {
                q1: {
                    question: "La columna mas a la derecha de la tabla periodica se compone por?",
                    answ: "Gases nobles",
                    wrong1: "Minerales",
                    wrong2: "Metales",
                    wrong3: "Haluros",
                },
                q2: {
                    question: "De que gas se compone principalmente la atmosfera de Venus?",
                    answ: "Dioxido de Carbono",
                    wrong1: "Monoxido de Carbono",
                    wrong2: "Nitrogeno",
                    wrong3: "Dioxido Azufre",
                },
                q3: {
                    question: "A que distanciase encuentra la estrella Alfa Centauri?",
                    answ: "4.4 años luz",
                    wrong1: "5 años luz",
                    wrong2: "15 años luz",
                    wrong3: "7.4 años luz",
                },
                q4: {
                    question: "Qué función cumple el Bosón de Higgs?",
                    answ: "Da masa a todas las particulas",
                    wrong1: "Forma parte de los atomos",
                    wrong2: "Agrega carga positiva a una particula",
                    wrong3: "Agrega carga negativa a una particula",
                },
                q5: {
                    question: "Qué sintetiza la RNA polimeraza II?",
                    answ: "RNA m",
                    wrong1: "RNA t",
                    wrong2: "RNA r",
                    wrong3: "Ninguna de las anteriores",
                }
            }
        
        }
        
        function random(min, max) {//funcion de aleatoriedad numerica
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        
        //genera numeros aleatorios para implementarlo en las preguntas
        const n1 = random(0,4);
        const n2 = random(0,4);
        const n3 = random(0,4);
        const n4 = random(0,4);
        const n5 = random(0,4);
        
        //transforma los objetos categorias en arreglos
        const arrq1 = Object.values(categ_q.general);
        const arrq2 = Object.values(categ_q.history);
        const arrq3 = Object.values(categ_q.sports);
        const arrq4 = Object.values(categ_q.geography);
        const arrq5 = Object.values(categ_q.science);
        
        //selecciona las preguntas por categoria segun posicion dentro del array
        const qlevels = {
            qlvl1: arrq1[n1],
            qlvl2: arrq2[n2],
            qlvl3: arrq3[n3],
            qlvl4: arrq4[n4],
            qlvl5: arrq5[n5],
        }
        
        //asigna los valores a mostrar en la interfaz
        if(qlevels){
            
            //lvl1
            lvl1.innerHTML = qlevels.qlvl1.question;
            opt1.innerHTML = qlevels.qlvl1.answ;
            opt2.innerHTML = qlevels.qlvl1.wrong1;
            opt3.innerHTML = qlevels.qlvl1.wrong2;
            opt4.innerHTML = qlevels.qlvl1.wrong3;
            //lvl2
            lvl2.innerHTML = qlevels.qlvl2.question;
            opt5.innerHTML = qlevels.qlvl2.wrong1;
            opt6.innerHTML = qlevels.qlvl2.wrong2;
            opt7.innerHTML = qlevels.qlvl2.answ;
            opt8.innerHTML = qlevels.qlvl2.wrong3;
            //lvl3
            lvl3.innerHTML = qlevels.qlvl3.question;
            opt9.innerHTML = qlevels.qlvl3.wrong1;
            opt10.innerHTML = qlevels.qlvl3.wrong2;
            opt11.innerHTML = qlevels.qlvl3.wrong3;
            opt12.innerHTML = qlevels.qlvl3.answ;
            //lvl4
            lvl4.innerHTML = qlevels.qlvl4.question;
            opt13.innerHTML = qlevels.qlvl4.wrong1;
            opt14.innerHTML = qlevels.qlvl4.answ;
            opt15.innerHTML = qlevels.qlvl4.wrong2;
            opt16.innerHTML = qlevels.qlvl4.wrong3;
            //lvl5
            lvl5.innerHTML = qlevels.qlvl5.question;
            opt17.innerHTML = qlevels.qlvl5.wrong1;
            opt18.innerHTML = qlevels.qlvl5.wrong2;
            opt19.innerHTML = qlevels.qlvl5.answ;
            opt20.innerHTML = qlevels.qlvl5.wrong3;
        }
        
        //botones
        const checkButton1 = document.getElementById('check1');
        const nextButton1 = document.getElementById('next1');
        const cancelButton = document.getElementById('cancel1');
        const checkButton2 = document.getElementById('check2');
        const nextButton2 = document.getElementById('next2');
        const cancelButton2 = document.getElementById('cancel2');
        const checkButton3 = document.getElementById('check3');
        const nextButton3 = document.getElementById('next3');
        const cancelButton3 = document.getElementById('cancel3');
        const checkButton4 = document.getElementById('check4');
        const nextButton4 = document.getElementById('next4');
        const cancelButton4 = document.getElementById('cancel4');
        const checkButton5 = document.getElementById('check5');
        const nextButton5= document.getElementById('next5');
        const cancelButton5 = document.getElementById('cancel5');
        //------------------------------------
        //respuestas correctas
        const correct1 = document.getElementById('opt1');
        const rad1 = document.getElementById('rad1');
        const correct2 = document.getElementById('opt7');
        const rad7 = document.getElementById('rad7');
        const correct3 = document.getElementById('opt12');
        const rad12 = document.getElementById('rad12');
        const correct4 = document.getElementById('opt14');
        const rad14 = document.getElementById('rad14');
        const correct5 = document.getElementById('opt19');
        const rad19 = document.getElementById('rad19');
        
        if(checkButton1){
            checkButton1.addEventListener("click", function handler(event) {//accion del boton check
                this.removeEventListener("click", handler);
                if(correct1.checked){
                    rad1.style.border = 'solid 2px #50e40b';
                    nextButton1.style.display = 'initial';
                    checkButton1.style.display = 'none';
                    playerData.score+=10;
                    tableScore.innerHTML = `Score: ${playerData.score}`;
                }else{
                    alert(`Jugador ${playerData.name} has perdido, tu puntaje es: ${playerData.score}`);
                    $.ajax({//registra el jugador y su puntaje en DB
                        method: 'POST',
                        url: '/api/players',
                        data:{
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                }
            });
        }
    
        if(cancelButton){
            cancelButton.addEventListener('click', function handler(event){//en caso de cancelar
                this.removeEventListener("click", handler);
                const option = window.confirm('Esta seguro de que desea terminar el juego?');
                if (option) {
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                    
                }
            })
        }

        //actualizacion de la tabla de puntaje en interfaz
        const tableScore2 = document.getElementById('score2');
        const tableScore3 = document.getElementById('score3');
        const tableScore4 = document.getElementById('score4');
        const tableScore5 = document.getElementById('score5');

        if(nextButton1){
            nextButton1.addEventListener("click", function handler(event) {//acciones del boton next
                this.removeEventListener("click", handler);
                cat1.style.display = 'none';
                cat2.style.display = 'flex';
                tableScore2.innerHTML = `Score: ${playerData.score}`;
            });
        }

        if(cancelButton2){
            cancelButton2.addEventListener('click', function handler(event){
                this.removeEventListener("click", handler);
                const option = window.confirm('Esta seguro de que desea terminar el juego?');
                if (option) {
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                    
                }
            })
        }

        if(checkButton2){
            checkButton2.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                if(correct2.checked){
                    rad7.style.border = 'solid 2px #50e40b';
                    nextButton2.style.display = 'initial';
                    checkButton2.style.display = 'none';
                    playerData.score+=15;
                    tableScore2.innerHTML = `Score: ${playerData.score}`;
                }else{
                    alert(`Jugador ${playerData.name} has perdido, tu puntaje es: ${playerData.score}`);
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                }
            });
        }

        if(nextButton2){
            nextButton2.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                cat2.style.display = 'none';
                cat3.style.display = 'flex';
                tableScore3.innerHTML = `Score: ${playerData.score}`;
            });
        }

        if(cancelButton3){
            cancelButton3.addEventListener('click', function handler(event){
                this.removeEventListener("click", handler);
                const option = window.confirm('Esta seguro de que desea terminar el juego?');
                if (option) {
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                    
                }
            })
        }

        if(checkButton3){
            checkButton3.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                if(correct3.checked){
                    rad12.style.border = 'solid 2px #50e40b';
                    nextButton3.style.display = 'initial';
                    checkButton3.style.display = 'none';
                    playerData.score+=20;
                    tableScore3.innerHTML = `Score: ${playerData.score}`;
                }else{
                    alert(`Jugador ${playerData.name} has perdido, tu puntaje es: ${playerData.score}`);
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                }
            });
        }

        if(nextButton3){
            nextButton3.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                cat3.style.display = 'none';
                cat4.style.display = 'flex';
                tableScore4.innerHTML = `Score: ${playerData.score}`;
            });
        }

        if(cancelButton4){
            cancelButton4.addEventListener('click', function handler(event){
                this.removeEventListener("click", handler);
                const option = window.confirm('Esta seguro de que desea terminar el juego?');
                if (option) {
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                    
                }
            })
        }

        if(checkButton4){
            checkButton4.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                if(correct4.checked){
                    rad14.style.border = 'solid 2px #50e40b';
                    nextButton4.style.display = 'initial';
                    checkButton4.style.display = 'none';
                    playerData.score+=25;
                    tableScore4.innerHTML = `Score: ${playerData.score}`;
                }else{
                    alert(`Jugador ${playerData.name} has perdido, tu puntaje es: ${playerData.score}`);
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                }
            });
        }

        if(nextButton4){
            nextButton4.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                cat4.style.display = 'none';
                cat5.style.display = 'flex';
                tableScore5.innerHTML = `Score: ${playerData.score}`;
            });
        }

        if(cancelButton5){
            cancelButton5.addEventListener('click', function handler(event){
                this.removeEventListener("click", handler);
                const option = window.confirm('Esta seguro de que desea terminar el juego?');
                if (option) {
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                    
                }
            })
        }

        if(checkButton5){
            checkButton5.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                if(correct5.checked){
                    rad19.style.border = 'solid 2px #50e40b';
                    nextButton5.style.display = 'initial';
                    checkButton5.style.display = 'none';
                    cancelButton5.style.display = 'none';
                    playerData.score+=30;
                    tableScore5.innerHTML = `Score: ${playerData.score}`;
                }else{
                    alert(`Jugador ${playerData.name} has perdido, tu puntaje es: ${playerData.score}`);
                    $.ajax({
                        method: 'POST',
                        url: '/api/players',
                        data: {
                            'name': playerData.name,
                            'score': playerData.score
                        }
                    });
    
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                }
            });
        }

        if(nextButton5){
            nextButton5.addEventListener("click", function handler(event) {
                this.removeEventListener("click", handler);
                alert(`Has ganado!
                    Tu puntaje es: ${playerData.score}
                    Tu puntaje se ha guardado en la tabla de puntuacion.
                `);//finaliza el juego

                $.ajax({
                    method: 'POST',
                    url: '/api/players',
                    data: {
                        'name': playerData.name,
                        'score': playerData.score
                    }
                });

                setTimeout(function(){
                    window.location.reload(true);
                }, 2000);//temporizado de reinicio de juego
            });
        }

        executed = true;

    }else {

        window.location.reload(true);

    }

}
