from collections import Counter

def crear_palindromo(cadena):
    cadena = cadena.lower()
    conteo = Counter(cadena)
    impares = [letra for letra, freq in conteo.items() if freq % 2 != 0]
    if len(impares) > 1:
        return "Not Possible"

    mitad = []
    centro = ''

    for letra in sorted(conteo):
        freq = conteo[letra]
        if freq % 2 != 0:
            centro = letra * freq
        else:
            mitad.append(letra * (freq // 2))

    mitad_str = ''.join(mitad)
    return mitad_str + centro + mitad_str[::-1]

# Pruebas
print(crear_palindromo("asdasdasdasdf"))
print(crear_palindromo("aepriorpio"))
print(crear_palindromo("laTinaLavaAnita"))
