ano = int(input('Em Que Ano Voce Esta? '))
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print('O ano {} e BISSEXTO!'.format(ano))
else:
    print('O ano {} Nao e BISSEXTO!'.format(ano))
