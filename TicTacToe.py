pole = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
players = ['X', 'O']
ch = 0
for i in pole:
    string = ''
    for j in i:
        string += j + '|'
    print(string[:-1])
while True:
    if ch % 2 == 0:
        # hod igroka example
        hod = int(input('Ход х:')) - 1
        if pole[hod // 3][hod % 3] == '_':
            pole[hod // 3][hod % 3] = players[ch % 2]
        else:
            print('Там занято!')
            ch -= 1
    else:
        # hod igroka example
        hod = int(input('Ход о: ')) - 1
        if pole[hod // 3][hod % 3] == '_':
            pole[hod // 3][hod % 3] = players[ch % 2]
        else:
            print('Там занято!')
            ch -= 1
    for i in pole:
        string = ''
        for j in i:
            string += j + '|'
        print(string[:-1])
    if pole[0][0] == pole[0][1] == pole[0][2] and pole[0][0] != '_':
        print('Победили ', pole[0][0])
        break
    if pole[1][0] == pole[1][1] == pole[1][2] and pole[1][0] != '_':
        print('Победили ', pole[1][0])
        break
    if pole[2][0] == pole[2][1] == pole[2][2] and pole[2][0] != '_':
        print('Победили ', pole[2][0])
        break
    if pole[0][0] == pole[1][0] == pole[2][0] and pole[0][0] != '_':
        print('Победили ', pole[0][0])
        break
    if pole[0][1] == pole[1][1] == pole[2][1] and pole[0][1] != '_':
        print('Победили ', pole[0][1])
        break
    if pole[0][2] == pole[1][2] == pole[2][2] and pole[0][2] != '_':
        print('Победили ', pole[0][2])
        break
    if pole[0][0] == pole[1][1] == pole[2][2] and pole[0][0] != '_':
        print('Победили ', pole[0][0])
        break
    if pole[0][2] == pole[1][1] == pole[2][0] and pole[0][2] != '_':
        print('Победили ', pole[0][2])
        break
    ch += 1
    if ch == 9:
        print('Ничья !')
        break