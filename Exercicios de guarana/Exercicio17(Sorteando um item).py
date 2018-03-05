import random
print('=======[Sorteador de aluno]=======')
n1 = raw_input('primeiro aluno: ')
n2 = raw_input('segundo aluno: ')
n3 = raw_input('terceiro aluno: ')
n4 = raw_input('quarto aluno: ')
lista = [n1, n2, n3, n4]
escolhido = random.choice(lista)
print('o aluno escolhido foi {}'.format(escolhido))
