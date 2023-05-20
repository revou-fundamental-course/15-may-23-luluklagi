//Calculate square area

document.getElementById("hitung-luas").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get user input
    var panjang_sisi = parseFloat(document.getElementById("panjang_sisi").value);
    
    // Calculate square area
    var area = panjang_sisi * panjang_sisi;
    
    // Display the area result
    document.getElementById("output_luas").textContent = area;
  });

//Calculate square circumference

  document.getElementById("hitung-keliling").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get user input
    var panjang_sisi = parseFloat(document.getElementById("panjang_sisi").value);
    
    // Calculate square circumference
    var circumference = 4 * panjang_sisi;
    
    // Display the circumference result
    document.getElementById("output_keliling").textContent = circumference;
  });

//Reset button
  document.getElementById("resetButton").addEventListener("click", function() {
    // Clear the input field
    document.getElementById("panjang_sisi").value = "";
    
    // Clear the output areas
    document.getElementById("output_luas").textContent = "";
    document.getElementById("output_keliling").textContent = "";
  });
  
