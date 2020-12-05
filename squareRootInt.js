function squareRootInt(n, g) {
    if (!g) {
        g = n / 2;
    }
    var d = n / g;              
    var ng = (d + g) / 2;    
    if (g == ng) {          
        return g;
    }
    return squareRootInt(n, ng);
}

console.log(squareRootInt(42)); // 6.48074069840786
