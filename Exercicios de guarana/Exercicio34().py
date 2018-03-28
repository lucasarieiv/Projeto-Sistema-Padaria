sal = float(input('Qual o salario do fucionario? '))
if sal <= 1200:
    novo = sal + (sal * 15 / 100)
else:
    novo = sal + (sal * 10 / 100)
print('Quem ganhava R${} passa a ganhar R${} agora.'.format(sal, novo))
