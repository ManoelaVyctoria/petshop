
/* var idade = 25; 
let nome = 'Manu';
const sobrenome = 'Vyctoria'; */

const nomePetshop = "PETSHOP AVANADE";

let pets = [{
    nome: 'Toby',
    tipo: 'Cachorro',
    idade: 13,
    raca: 'Vira-lata',
    peso: 11,
    tutor: 'Manu',
    contato: '(81) 98656-5976',
    vacinado: true,
    servicos: ['banho', 'tosa' ]
},
{
    nome: 'Nenzinho',
    tipo: 'Cachorro',
    idade: 9,
    raca: 'PitBull',
    peso: 15,
    tutor: 'Paula',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho', 'tosa', 'Corte de Unha' ]
},
{
    nome: 'Mimosa',
    tipo: 'Gato',
    idade: 2,
    raca: '----',
    peso: 6,
    tutor: 'Junior',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho']
}
];

const listarPets = () => {
    for(let pet of pets){
    //for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome);
        //console.log(`O nome do pet é ${pets[i].nome}`);
        //template string
        console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

    }
}

listarPets();

/* console.log(pet);*/
