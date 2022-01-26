function Check(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/omAF1sqCU/model.json', Model);
}


function Model(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    console.log(results);
}