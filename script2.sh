#!/bin/bash

read -p "Введите пароль:" num

if [ "$num" == 1234 ]; then
	echo "пароль верный"
else 
	read -p "Пароль неверный. Попробуйте снова:" num
fi
echo "$num"
