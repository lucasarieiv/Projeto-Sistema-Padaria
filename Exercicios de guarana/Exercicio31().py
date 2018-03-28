dis = float(input('Qual a distancia de sua viagem? '))
print('Voce esta prestes a começar uma viagem de {}km'.format(dis))
if dis <= 200:
    rs = dis * 0,50
    print('E o preço da sua viagem sera R${}'.format(rs))
else:
    rs = dis * 0,45
    print('E o preço da sua viagem sera R${}'.format(rs))
