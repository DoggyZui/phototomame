# phototomame

# 요청에 따른 유지보수단계에 있음.
- 시스템 개발은 완수함.

## 서버측 사항
- [x] 아틀라싱 툴 제작 (node)
- [x] github Action 설정...

## 클라이언트측 사항
- [x] 아틀라싱된 사진 해독하여 집어넣을 수 있는지에 대한 검증
- [x] Texture2D 잘라서 배열에 넣기.

## 협의사항
- [x] 사진 규격
> 일단 FHD로 합의.
- [x] 아틀라싱의 주기에 대한 확인...
> 불러오는데 부하가 있을 수 있으니, 타임씬으로 하나씩 쪼개어 타임별로 하는 방안.. (측정을 했으면 좋겠다.)
> 타임별로 하지않고, 한번에 하여 중간 로드시간을 없애는 방안... (현재꺼 +1의 사진을 불러와서 미리 교신시킨다.) -> 착시효과!
