var obj_name = "";
var obj_conf = 0;
function Check(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/omAF1sqCU/model.json', Model);
}


function Model(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error("error");
      } else {
          console.log(results);
          obj_name = results[0].label;
          obj_conf = results[0].confidence;
          console.log(obj_conf);
          conf_100 = obj_conf * 100;
          console.log(conf_100);
          conf_dec = conf_100.toFixed(2);
          console.log(conf_dec);
          
          color_code_r = Math.floor(Math.random() * 255) + 1;
          color_code_g = Math.floor(Math.random() * 255) + 1;
          color_code_b = Math.floor(Math.random() * 255) + 1;
    
          document.getElementById("result_label").style.color = "rgb(" + color_code_r + "," + color_code_g+ "," + color_code_b+ ")";
          
          document.getElementById("result_accuracy").style.color = "rgb(" + color_code_r + "," + color_code_g+ "," + color_code_b+ ")";
    
          document.getElementById("result_label").innerHTML = 'I can hear : '+obj_name;
          document.getElementById("result_accuracy").innerHTML = 'Accuracy : ' +conf_dec + "%";
    
          if (obj_name == "Dog") {
              document.getElementById('dog').src = 'dog.gif';
              document.getElementById('cat').src = 'cat.jpeg';
              document.getElementById('bear').src = 'bear.jpeg';
              
          }
          else if (obj_name == "Cat") {
            document.getElementById('dog').src = 'dog.jepg';
            document.getElementById('cat').src = 'cat.gif';
            document.getElementById('bear').src = 'bear.jpeg';
          }
          else (obj_name == "Bear") 
            document.getElementById('dog').src = 'dog.jpeg';
            document.getElementById('cat').src = 'cat.jpeg';
            document.getElementById('bear').src = 'bear.gif';
          }
      }
    
