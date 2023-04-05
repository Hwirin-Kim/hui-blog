---
title: react-query stale과 cache
description: staleTime과 cacheTime의 차이
date: "2023-03-20"
category: react
published: true
tags: ["react-query"]
---

## React-Query 의 도입

사이드 프로젝트를 진행하면서 react-query를 사용하여 서버로부터 받아온 데이터를 관리하였다. </br>

그러다 문득 react-query의 staleTime과 cacheTime의 차이가 헷갈려 다시 한번 공부 하였다.

## React-Query useQuery

useQuery를 사용하여 데이터를 요청하는경우 다음과 같은 순서로 동작하게 된다. <br>

### 데이터를 처음 받아오는 경우

#1. useQuery로 데이터를 요청한다.<br>

#2. 해당 쿼리 키에 저장된 데이터가 있는지 먼저 확인한다.<br>

#3. 처음이라 데이터가 없으니 서버로부터 데이터를 요청/응답 받는다. <br>

#4. 기본 stale시간이 0초로 설정되어 있으므로 바로 stale상태가 된다.

### 데이터가 있는 경우

#1. useQuery로 데이터를 요청한다. <br>

#2. 해당 쿼리 키에 저장된 데이터가 있는지 먼저 확인한다.<br>

#3. 데이터가 있으므로 해당 데이터를 보여준다. <br>

#4. 해당 데이터가 stale한 상태라면 fetching을 한다.<br>

#5. 서버로부터 데이터를 fetching하여 데이터를 받는다. <br>

#6. 리액트에서 두 데이터의 차이가 있다면 차이가 있는 부분의 UI를 업데이트 한다.<br>

## 그렇다면 staleTime과 cacheTime의 차이는 무엇일까?

### staleTime

데이터가 fresh한 상태에서 stale로 변경되는데 걸리는 시간이다. 해당 키의 데이터가 fresh한 상태라면 새로 fetch하지 않는다.

### cacheTime

데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간이다. <br>

쿼리 인스턴스가 unmount되면 데이터는 inactive상태가 된다.<br>

그리고 data는 설정된 cacheTime만큼 유지되는 것이다.<br>

cacheTime이 지나기 전에 쿼리인스턴스가 마운트 되면 데이터를 fetch하는동안 캐시 데이터를 보여준다.

### isFetching

isFetching은 데이터가 fetch될 때 true이다. 캐싱 데이터가 있어서 백그라운드에서 fetch되더라도 true이다.

### isLoading

캐싱 데이터가 없을 때, fetch중에 true이다.
