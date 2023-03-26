const data =[{"name":"Mélys","email":"kduggan0@who.int","phone":7083930961,"cgpa":9.17,"city":"Ibaan","age":19,"applied":true},
{"name":"Eugénie","email":"vwickardt1@google.com","phone":9605578359,"cgpa":9.39,"city":"Mohelno","age":25,"applied":true},
{"name":"Publicité","email":"rdew2@usda.gov","phone":7131350902,"cgpa":4.95,"city":"Bonga","age":23,"applied":false},
{"name":"Léa","email":"pfurphy3@gizmodo.com","phone":7553332004,"cgpa":2.6,"city":"Ipoh","age":24,"applied":true},
{"name":"Stéphanie","email":"mperrott4@infoseek.co.jp","phone":9301617746,"cgpa":2.43,"city":"Jackson","age":22,"applied":false},
{"name":"Véronique","email":"jvonderempten5@symantec.com","phone":7887997181,"cgpa":7.3,"city":"Itaperuna","age":29,"applied":true},
{"name":"Agnès","email":"llhommee6@tinyurl.com","phone":9657884312,"cgpa":9.18,"city":"Chapayeve","age":23,"applied":false},
{"name":"Sélène","email":"wcurle7@skype.com","phone":8440422553,"cgpa":6.5,"city":"Guocun","age":27,"applied":true},
{"name":"André","email":"adimmock8@gizmodo.com","phone":7387103961,"cgpa":9.97,"city":"Shikhany","age":28,"applied":false},
{"name":"Jú","email":"mboothroyd9@slashdot.org","phone":8012248805,"cgpa":9.55,"city":"Manika","age":22,"applied":false},
{"name":"Mårten","email":"achickena@whitehouse.gov","phone":7269727436,"cgpa":3.74,"city":"Kanye","age":27,"applied":true},
{"name":"Gaétane","email":"skuschab@google.es","phone":7865090626,"cgpa":3.8,"city":"Rolândia","age":30,"applied":true},
{"name":"Yè","email":"pgaskingc@amazon.co.uk","phone":7524797861,"cgpa":1.46,"city":"Higashine","age":25,"applied":true},
{"name":"Aloïs","email":"beldond@comsenz.com","phone":7414953258,"cgpa":2.6,"city":"Hradec nad Moravici","age":18,"applied":false},
{"name":"Crééz","email":"dkirwane@ibm.com","phone":7406899195,"cgpa":1.8,"city":"Ngelak","age":24,"applied":false},
{"name":"Cléa","email":"cralstonf@amazon.co.uk","phone":7353216641,"cgpa":7.47,"city":"Toledo","age":23,"applied":false},
{"name":"Bécassine","email":"orougheyg@google.de","phone":8242647581,"cgpa":2.57,"city":"Alvand","age":30,"applied":false},
{"name":"Yáo","email":"lrolseh@techcrunch.com","phone":7736824884,"cgpa":6.29,"city":"Žirovnice","age":22,"applied":true},
{"name":"Marie-ève","email":"fgreweri@oaic.gov.au","phone":7536586822,"cgpa":3.41,"city":"Marseille","age":19,"applied":false},
{"name":"Naëlle","email":"blengthornj@topsy.com","phone":7065393829,"cgpa":2.99,"city":"Padas","age":21,"applied":true}]
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


for (let i = 0; i < data.length; i++) {

var raw = JSON.stringify(data[i]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
}