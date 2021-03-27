import copy, random, time

area = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]


def area_ptint(field):
    for i in field:
        print('|'.join(i))


def move(field, move, player):
    if not move.isdigit():
        raise TypeError("Move must be integer !")
    move = int(move)
    field_copy = copy.deepcopy(field)
    move -= 1
    if 0 < move < 10 and field_copy[move // 3][move % 3] == '_':
        field_copy[move // 3][move % 3] = player
        return field_copy
    raise IndexError("Incorrect input index !")


def enemy_move(mas, player):
    while True:
        try:
            masiv = move(mas, str(random.randint(1, 9)), player)
            return masiv
        except IndexError:
            continue


def winner_detect(pole):
    if pole[0][0] == pole[0][1] == pole[0][2] and pole[0][0] != '_':
        return [True, pole[0][0]]
    if pole[1][0] == pole[1][1] == pole[1][2] and pole[1][0] != '_':
        return [True, pole[1][0]]
    if pole[2][0] == pole[2][1] == pole[2][2] and pole[2][0] != '_':
        return [True, pole[2][0]]
    if pole[0][0] == pole[1][0] == pole[2][0] and pole[0][0] != '_':
        return [True, pole[0][0]]
    if pole[0][1] == pole[1][1] == pole[2][1] and pole[0][1] != '_':
        return [True, pole[0][1]]
    if pole[0][2] == pole[1][2] == pole[2][2] and pole[0][2] != '_':
        return [True, pole[0][2]]
    if pole[0][0] == pole[1][1] == pole[2][2] and pole[0][0] != '_':
        return [True, pole[0][0]]
    if pole[0][2] == pole[1][1] == pole[2][0] and pole[0][2] != '_':
        return [True, pole[0][2]]
    else:
        return [False, None]

area_ptint(area)
while True:
    while True:
        a = input('Enter coordinate: ')
        try:
            area = move(area, a, 'X')
            break
        except (IndexError, TypeError):
            print('Wrong index !')

    area_ptint(area)
    area = enemy_move(area, '0')
    result = winner_detect(area)
    if result[0]:
        print(f'Winner is {result[1]}')
        area_ptint(area)
        break
    time.sleep(1)
    print('Enemy move:')
    area_ptint(area)
    result = winner_detect(area)
    if result[0]:
        print(f'Winner is {result[1]}')
        area_ptint(area)
        break