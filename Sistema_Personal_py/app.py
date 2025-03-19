def registrar_personas():
    personas = []
    cantidad = int(input("¿Cuántas personas desea registrar? "))
    
    for i in range(cantidad):
        nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
        edad = int(input(f"Ingrese la edad de {nombre}: "))
        nota = float(input(f"Ingrese la nota de {nombre}: "))
        personas.append((nombre, edad, nota))
    
    return personas

def mostrar_listados(personas):
    print("\nListado ingresado:")
    for p in personas:
        print(f"{p[0]} - {p[1]} años - Nota: {p[2]}")
    
    ordenado = sorted(personas, key=lambda x: x[2], reverse=True)
    print("\nListado ordenado por nota:")
    for p in ordenado:
        print(f"{p[0]} - {p[1]} años - Nota: {p[2]}")

def main():
    personas = registrar_personas()
    mostrar_listados(personas)

if __name__ == "__main__":
    main()
