from collections import Counter  # Importamos Counter para contar la frecuencia de cada letra

# Función para crear un palíndromo a partir de una cadena dada, si es posible
def crear_palindromo(cadena):
    # Convertimos toda la cadena a minúsculas para uniformidad (ignorar mayúsculas)
    cadena = cadena.lower()

    # Contamos cuántas veces aparece cada letra en la cadena
    conteo = Counter(cadena)

    # Identificamos las letras que aparecen un número impar de veces
    # Solo puede haber una letra con frecuencia impar en un palíndromo válido
    impares = [letra for letra, freq in conteo.items() if freq % 2 != 0]

    # Si hay más de una letra con frecuencia impar, no se puede formar un palíndromo
    if len(impares) > 1:
        return "Not Possible"

    mitad = []  # Esta lista guardará la mitad izquierda del palíndromo
    centro = ''  # Esta variable guardará la letra del centro (si hay una impar)

    # Recorremos las letras en orden alfabético para consistencia
    for letra in sorted(conteo):
        freq = conteo[letra]
        if freq % 2 != 0:
            # Si la letra tiene una frecuencia impar, se coloca toda en el centro
            centro = letra * freq
        else:
            # Si la frecuencia es par, tomamos la mitad para la primera mitad del palíndromo
            mitad.append(letra * (freq // 2))

    # Convertimos la lista de la mitad izquierda a un string
    mitad_str = ''.join(mitad)

    # Formamos el palíndromo completo: mitad izquierda + centro (si existe) + mitad derecha (inversa)
    return mitad_str + centro + mitad_str[::-1]

# Pruebas de la función con diferentes entradas
print(crear_palindromo("asdasdasdasdf"))     # Posible palíndromo
print(crear_palindromo("aepriorpio"))        # Not Possible
print(crear_palindromo("laTinaLavaAnita"))   # anitalavalatina
