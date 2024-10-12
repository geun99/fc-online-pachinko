# [FC Online Pachinko](https://fc-online-pachinko.vercel.app)
FC Online의 웹상점 "토끼 가족 송편 가게"의 시뮬레이터를 구현한 사이트입니다.
## 사용 기술
- React.JS(프레임워크)
- TypeScript(개발언어)
- Styled Components(스타일링 CSS in JS)
- Vite(빌드 도구)

## 기능

- 상단 탭버튼을 통한 아빠 토끼(7 x 7), 엄마 토끼(5 x 5), 아기 토끼(4 x 4) 빙고판 선택 기능
- 빙고판 초기화 기능
- 남은 보상 목록
- 누적 획득 보상 목록
- 빙고판 클릭시 보상을 나타내는 모달 표시

## 정보 출처
- [FC Onlie 웹상점](https://shop.fconline.nexon.com/Events/240829/TheThreeRabbit)

## 기능 소개
![image](https://github.com/user-attachments/assets/e8ca76ff-0797-409e-b4e4-d6af0e2f90a5)
상단 탭 버튼을 통해 빙고판을 변경할 수 있습니다. <br/> 
빙고판을 변경해도 이전 빙고판의 정보는 기억되어 자유롭게 왔다갔다 할 수 있습니다.<br/>
빙고판에 마우스를 올리면(hover) 토끼가 위로 통통 튀는 애니메이션이 동작합니다.

![image](https://github.com/user-attachments/assets/342324ce-ddfd-48b3-a5af-cf252fad9817)
아빠토끼 빙고판의 경우 연속된 숫자의 보상이 모두 C인 경우는 없습니다. <br/>
EX) 3번이 C등급일 경우 2번과 4번은 반드시 B 이상의 등급을 가지고 있습니다. <br/>
C등급을 뽑으면 양 옆에 "B등급 이상"이라는 힌트를 띄워줍니다.

![image](https://github.com/user-attachments/assets/8dc17fc7-3ac7-4bda-b5aa-ae2daccfff05)
빙고판을 클릭하면 해당 번호의 보상이 공개되며 잔여 보상은 줄어들고 누적 획득 보상이 늘어납니다. <br/>
모달을 통해 획득한 보상을 확인할 수 있습니다.

![image](https://github.com/user-attachments/assets/72ae7b1d-725a-474b-8a1e-22be0d39a08b)
누적 획득 보상의 경우 빙고판을 이동하여도 개수가 유지되며 획득 보상 초기화 버튼을 통해 초기화할 수 있습니다.<br/>
잔여 보상은 현재 보여지고 있는 빙고판에 대한 잔여 보상 정보를 제공해줍니다.

![image](https://github.com/user-attachments/assets/33034e29-6e07-41df-a632-f4f169fabdf2)
아빠토끼는 7x7 엄마토끼는 5x5 아기토끼는 4x4 크기의 빙고판을 가지며 각각의 보상 개수는 다음과 같습니다. <br/>
아빠토끼) SSS : 1개, SS : 2개, S : 4개, A : 6개, B : 16개, C : 20개<br/>
엄마토끼) SSS : 1개, SS : 2개, S : 4개, A : 6개, B : 12개, C : 0개<br/>
아기토끼) SSS : 1개, SS : 2개, S : 4개, A : 9개, B : 0개, C : 0개

![image](https://github.com/user-attachments/assets/ea4d8048-1891-46c7-b54a-d593c0e61183)
빙고판 초기화 버튼을 누르면 현재 활성화된 탭의 빙고판을 초기화 시킵니다.
<br/> 초기화 시키면 잔여 보상또한 초기화됩니다.



