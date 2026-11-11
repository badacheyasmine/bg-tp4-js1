"use strict";

// le slide 39
const Etudiants1= ["Etudiant1" ,"Etudiant2", "Etudiant3" ] 
const F1 = ()=>{
  
  Etudiants1.forEach(element => {
    console.log(element)
  });
  }

//le slide 39
const Etudiants2 = { 
  nom:'John',
  prenom : 'DOE',
  age  : 30
}

const F2= ()=>{ 
  console.log(Etudiants2)
}
//le slide 41
const Etudiant3 = [ 
  {
    etudiant1 : "nom1-prenom1-21"
  },

  {
etudiant1 : "nom2-prenom2-22"
  },

  {
etudiant1 : "nom3-prenom3-23"
  }
]

const F3 = ()=>{

  Etudiant3.forEach(etudiant => {
    console.log(etudiant.etudiant1)
  });

}