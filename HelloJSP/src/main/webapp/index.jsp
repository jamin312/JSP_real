<%@page import="org.apache.ibatis.reflection.SystemMetaObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:forward page="boardList.do"></jsp:forward>
	
	<h3>Hello, JSP</h3>
	<c:set var="name" value="홍길동"></c:set>
	<c:out value="${name }"></c:out>
	
	<c:choose>
		<c:when test="${!empty name}"> <!-- null, " "  -->
			<p>null이나 공백이 아님</p>
		</c:when>
		<c:otherwise>
		<p>null이나 공백임</p>
		</c:otherwise>
	</c:choose>

	<c:set var="age" value="23"></c:set>
	<!-- 문자열 취급 -->

	<c:if test="${age >= 20 }">
		<p>당신은 성년입니다.</p>
	</c:if>

	<c:choose>
		<c:when test="${age >= 30 }">			<!-- if else 처럼 -->
			<p style="color: red;">어른</p>
		</c:when>
		<c:when test="${age >= 20 }">
			<p style="color: red;">성년</p>
		</c:when>
		<c:otherwise>
			<p style="color: green;">미성년</p>
		</c:otherwise>
	</c:choose>
	
	<c:forEach var="i" begin="1" end="10" step="2">   <!-- step 증가치 default 1 -->
		<p>2 * ${i } = ${2 * i }</p>
	</c:forEach>

</body>
</html>