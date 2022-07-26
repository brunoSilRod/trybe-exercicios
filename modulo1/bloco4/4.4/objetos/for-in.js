let info = {
    personagem : 'Margarida',
    origem  : 'Pato Donald',
    nota : 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  // console.log("Seja bem vindo(a) ", info.personagem);
info.recorrente = "sim";
  // console.log(info)
  // for (let key in info){
  //   console.log(key)
  //   console.log(info[key])
  // };
let info2 = {
    personagem : 'Tio Patinhas',
    origem : "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota : 'O último MacPatinhas',
    recorrente : "sim"
  };
for (let key in info){
  if (key != "recorrente"){
    console.log(info[key]," e ",info2[key])
  }else if (info[key] == info2[key]){
    console.log("Ambos recorrentes")
  }else{
    console.log("Ambos não são recorrentes")
  }
};
