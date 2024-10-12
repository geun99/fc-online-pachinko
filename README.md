# [FC Online Pachinko](https://fc-online-pachinko.vercel.app)
FC Online의 웹상점 "토끼 가족 송편 가게"의 시뮬레이터를 구현한 사이트입니다.
## 사용 기술
- React.JS(프레임워크)
- TypeScript(개발언어)
- Styled Components(스타일링 CSS in JS)
- Vite(빌드 도구)

## 기능

- 7 x 7, 5 x 5, 4 x 4 빙고판 선택 기능
- 빙고판 초기화 기능
- 남은 보상 목록
- 누적 획득 보상 목록
- N x N 배열에 랜덤으로 보상을 생성하는 배열 생성

## 정보 출처
- [FC Onlie 웹상점](https://shop.fconline.nexon.com/Events/240829/TheThreeRabbit)

## 기능 소개
![image](https://github.com/user-attachments/assets/8ce19011-6534-4a5a-a75a-d74839644add)

상단 탭 버튼을 통해 빙고판을 변경할 수 있습니다. 빙고판을 변경해도 이전 빙고판의 정보는 기억되어 자유롭게 왔다갔다 할 수 있습니다.

![image](https://github.com/user-attachments/assets/abcc18c6-8ddd-4dc4-801e-df5281a86896)
아빠토끼 빙고판의 경우 연속된 숫자의 보상이 모두 C인 경우는 없습니다. <br/>
EX) 3번이 C등급일 경우 2번과 4번은 반드시 B 이상의 등급을 가지고 있습니다.

![image](https://github.com/user-attachments/assets/418085f7-a561-4d28-aa36-aa892e729e03)
빙고판을 클릭하면 해당 번호의 보상이 공개되며 잔여 보상은 줄어들고 누적 획득 보상이 늘어납니다.
모달을 통해 획득한 보상을 확인할 수 있습니다.

![image](https://github.com/user-attachments/assets/68a7990a-c9ad-4a81-ba2e-9ad31c2e0f0a)
누적 획득 보상의 경우 빙고판을 이동하여도 개수가 유지되며 획득 보상 초기화 버튼을 통해 초기화할 수 있습니다.<br/>
잔여 보상은 현재 보여지고 있는 빙고판에 대한 잔여 보상 정보를 제공해줍니다.

![image](https://github.com/user-attachments/assets/5d9ce5ba-1621-41f8-ad95-3b787b83bb4f)
아빠토끼는 7x7 엄마토끼는 5x5 아기토끼는 4x4 크기의 빙고판을 가지며 각각의 보상 개수는 다음과 같습니다. <br/>
아빠토끼) SSS : 1개, SS : 2개, S : 4개, A : 6개, B : 16개, C : 20개<br/>
엄마토끼) SSS : 1개, SS : 2개, S : 4개, A : 6개, B : 12개, C : 0개<br/>
아기토끼) SSS : 1개, SS : 2개, S : 4개, A : 9개, B : 0개, C : 0개

![image](https://github.com/user-attachments/assets/3bf0ba2c-2ad0-446e-800f-13b9c400fded)
빙고판 초기화 버튼을 누르면 현재 활성화된 탭의 빙고판을 초기화 시킵니다. 초기화 시키면 잔여 보상또한 초기화됩니다.

![image](https://github.com/user-attachments/assets/af36605c-f98e-4406-9c01-fe3a7a13d624)
7 x 7 빙고판의 경우 C등급을 뽑으면 양 옆에 "B등급 이상"이라는 힌트를 띄워줍니다.

