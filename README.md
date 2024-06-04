# react-shopping-products

## 핵심 기능 한줄 정의

사용자가 상품 목록을 조회, 필터링 및 정렬하고, 장바구니에 상품을 추가하거나 제거할 수 있는 기능을 제공한다.

## 📍 학습 목표

- ✔️ MSW를 사용하여 `API 요청을 모킹`하고 개발할 수 있다.
- ✔️ `비동기 작업(API 요청)의 상태를 관리`하고, 비동기 요청 상태에 따라 적절한 UI를 보여줄 수 있다.
- ✔️ RTL을 사용하여 `비동기 작업에 대한 테스트`를 작성할 수 있다.

## 🎯 기능 요구 사항

### 상품 목록 조회

- [x] MSW를 이용하여 `/products` API를 모킹하고 상품 목록 데이터를 가져온다.
- [x] 상품 목록을 무한스크롤 방식으로 표시한다.
  - 가장 처음 불러오는 개수 : 20
  - 이 후 불러오는 상품 개수 : 4

### 상품 정렬 및 필터링

- [x] 상품을 카테고리 별로 필터링 할 수 있다.

  - fashion
  - electronics
  - books
  - fitness
  - kitchen
  - beverage

- [x] 상품을 가격 순으로 정렬할 수 있다.
  - 낮은 가격 순
  - 높은 가격 순

### 상품 장바구니 담기

- [x] 사용자가 담기 버튼을 누르면, 장바구니에 추가된다. 이 때 장바구니에 담긴 아이템 '종류' 의 갯수로 숫자를 표시한다.
- [x] 장바구니 담기 요청 중 에러가 발생한 경우, 에러 메시지를 사용자에게 알려주는 UI를 표시한다.
- [x] 장바구니에서 빼기 버튼을 누르면, 장바구니에서 해당 아이템이 제거된다.
