import random
print('============================')
n1 = raw_input('primeiro aluno: ')
n2 = raw_input('segundo aluno: ')
n3 = raw_input('terceiro aluno: ')
n4 = raw_input('quarto aluno: ')
lista = [n1, n2, n3, n4]
random.shuffle(lista)
print('a ordem do trabalho sera')
print(lista)
