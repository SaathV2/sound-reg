function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3MHHThnXX/model.json')
    
}

function modelReady(){
    console.log("model loaded")
    classifier.classify( gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);

    }
    else{
        console.log(results);
        random_number_r = Math.random(0,255);  
        random_number_g = Math.random(0,255);  
        random_number_b = Math.random(0,255);        
    }

    document.getElementById("results_label").innerHTML = 'Sound heard - '+ results[0].label;
    document.getElementById("results_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_g+")";
   document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_g+")";

   img = document.getElementById('alien1')
   img1 = document.getElementById('alien2')
   img2 = document.getElementById('alien3')
   img3 = document.getElementById('alien4')

   if (results[0].label == "Click") {
       img.src = 'aliens-01.gif';
       img.src = 'aliens-02.png';
       img.src = 'aliens-03.png';
       img.src = 'aliens-04.png';

   }
   else if(results[0].label == "cat") {
    img.src = 'aliens-01.png';
    img.src = 'aliens-02.gif';
    img.src = 'aliens-03.png';
    img.src = 'aliens-04.png';
   }

   else if(results[0].label == "dog") {
    img.src = 'aliens-01.png';
    img.src = 'aliens-02.png';
    img.src = 'aliens-03.gif';
    img.src = 'aliens-04.png';
   }

   else if(results[0].label == "bell") {
    img.src = 'aliens-01.png';
    img.src = 'aliens-02.png';
    img.src = 'aliens-03.png';
    img.src = 'aliens-04.gif';
   }






}
