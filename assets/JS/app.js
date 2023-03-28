
/*TASK - 1

1 ədəd Confirm metodu olacaq.Əgər user OK click etsə body
sayt istifadəçiyə görünsün əks təqdirdə sayt görünməsin

function myFunction() {
    let text = "Press a button!";
    if (confirm(text) == true) {
      text = "Salam";
    } else {
      text = "Sehife baglandi!Sagol";
    }
    alert(text)
  }

*/

  /*TASK - 2

1 ədəd Prompt metodu olacaq. User yaşını daxil etməlidir.Əgər
userin yaşı 18-dən balacadırsa xəbərdarlıq mesajı çıxarsın

function myFunction() {
    let age = prompt("Please enter your age");
    if (age > 18) {
      alert("Xos gelmisiz!")
      
    }
    else{alert('Yasiniz azdir')

    }
  }*/


  /*TASK - 3

1 ədəd input olacaq və istifadəçi inputa Code Academy-dəki
Qrup adını yazacaq.Əgər səhər qrupudursa HTML-ə əlavə olunacaq qrup adının rəngi
sarı olsun, günorta qrupu qırmızı olsun, axşam qrupu isə qara rəngdə olsun*/

function AddGroup(){
    var group = document.getElementById('code').value
    var groupcode = group.slice(-3)
    
    if(groupcode>=100 & groupcode<200){
        document.body.style.backgroundColor = "green"
        document.getElementById('time').innerHTML = `Seher qrupu`

    }
    if(groupcode>=200 & groupcode<300){
        document.body.style.backgroundColor = "yellow"
        document.getElementById('time').innerHTML = `Gunorta qrupu`
    }

    else if(groupcode>=300 & groupcode<400){
        document.body.style.backgroundColor = "blue"
        document.getElementById('time').innerHTML = `Axsam qrupu`

    }
    else{
        document.body.style.backgroundColor = "red"
        document.getElementById('time').innerHTML = `Bele qrup yoxdur!`
    }

    }


    

