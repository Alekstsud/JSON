# JSON
JSON
 4. Создать внешний репозиторий c названием JSON.     Create repository
                                                       
 5. Клонировать репозиторий JSON на локальный компьютер.   git clone https://github.com/Alekstsud/JSON.git

 6. Внутри локального JSON создать файл “new.json”.        touch  new.json

 7. Добавить файл под гит.          git add . new.json

 8. Закоммитить файл.               git commit -m "add json" 

 9. Отправить файл на внешний GitHub репозиторий.  git push

 10. Отредактировать содержание файла “new.json” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате JSON.
 
Внести изменения: vim new.json
нажать клавишу "i" ввести текст

{
 "name": "Tsudzila Aliaksandr",
 "age": "32",
 "pets": "0",
 "future desired salary": "1000"
}

Cохранить и выйти: "esc" ":wq"

 11. Отправить изменения на внешний репозиторий.  git commit -am "add edit json"
                                                  git push

 12. Создать файл preferences.json    touch preferences.json

 13. В файл preferences.json добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате JSON.

Внести изменения: vim preferences.json
нажать клавишу "i" ввести текст

{
 "Favorite movie": "Star Wars",
 "Favorite series": "The Big Bang Theory",
 "Favorite food": "Lasagna",
 "Favorite time of year": "Summer",
 "Country you'd like to visit": "China"
}

Cохранить и выйти: "esc" ":wq"

 14. Создать файл skills.json добавить информацию о скиллах которые будут изучены на курсе в формате JSON

Создаём файл: touch skills.json
Вносим изменения: vim skills.json
нажать клавишу "i" ввести текст

{
"Googling"
"Postman"
"Git"
"Charles"
"Jmeter"
"Android Studio"
}

Cохранить и выйти: "esc" ":wq"

 15. Отправить сразу 2 файла на внешний репозиторий.   git add .
                                                       git commit -m "add 2 files"
                                                       git push

 16. На веб интерфейсе создать файл bug_report.json.        - Add file
							    - Create new file
							    - Commit new file
 
17. Сделать Commit changes (сохранить) изменения на веб интерфейсе.  -edit this file
                                                                     в строке Commit changes пишем новый Commit
                                                                     Commit changes

 18. На веб интерфейсе модифицировать файл bug_report.json, добавить баг репорт в формате JSON.

-edit this file

{
	"ID"
        "Version"
	"Summary"
	"Req id"
	"Steps"
	"Actual result"
	"Expected result"
	"Severity"
	"Priority"
        "Attachments"
}

19. Сделать Commit changes (сохранить) изменения на веб интерфейсе.    в строке Commit changes написать новый Commit
                                                                       Commit changes

20. Синхронизировать внешний и локальный репозиторий JSON       git pull
