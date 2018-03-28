name = raw_input('Digite seu nome: ').strip()
print("O seu nome em Maiusculas : {}".format(name.upper()))
print("O seu nome em Minusculas : {}".format(name.lower()))
print("O seu nome ao todo tem {} letras".format(len(name) - name.count(' ')))
