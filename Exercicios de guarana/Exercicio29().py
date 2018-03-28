vel = float(input('Qual a velocidade atual do carro? '))
if vel > 80:
    multa = (vel * 7 ) - 80
    print('MULTADO! voce exedeu o limite permitido de 80km/h')
    print('Voce deve pagar um multa de R${:.2f}!'.format(multa))
    
else:
    print("Tenha um bom dia! dirija com segurança!")
