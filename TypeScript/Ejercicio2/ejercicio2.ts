function calcularPrecioConIVA(precio: number, iva: number): number {
    const precioConIVA = precio * (1 + iva);
    return Math.round(precioConIVA * 100) / 100;
  }
  
  const precio = parseFloat(prompt("Introduce el precio del artículo:"));
  const iva = 0.21; // Suponiendo un IVA del 21%
  const precioConIVA = calcularPrecioConIVA(precio, iva);
  
  console.log(`El precio del artículo es ${precio}€`);
  console.log(`El precio con IVA incluido es ${precioConIVA}€`);
  