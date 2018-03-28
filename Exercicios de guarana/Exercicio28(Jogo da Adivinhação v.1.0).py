from random import randint
from time import sleep
pc = randint(0, 5)
print("-=-" * 20)
print('Vou Pensar em um numero entre 0 e 5. Tente adivinhar...')
print("=-=" * 20)
resp = int(input('Em Qual numero eu pensei? '))
print('Processando...')
sleep(3)
if resp == pc:
    print('Parabens! voce conseguil me vencer!')
else:
    print('Ganhei! eu pensei no numero {} nao no {}!'.format(pc, resp))
