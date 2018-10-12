$(document).ready(function() {
	// 10% Tip
	$("#ten").on('click', function() {
	var subtotal = $("#subtotal").val()
	var tip = Number(subtotal) * 0.1
	$("#tip").val(tip.toFixed(2))
	})
	// 15% Tip
	$("#fifteen").on('click', function() {
	var subtotal = $("#subtotal").val()
	var tip = Number(subtotal) * 0.15
	$("#tip").val(tip.toFixed(2))
	})
	// 20% Tip
	$("#twenty").on('click', function() {
	var subtotal = $("#subtotal").val()
	var tip = Number(subtotal) * 0.2
	$("#tip").val(tip.toFixed(2))
	})
	// 25% Tip
	$("#twentyfive").on('click', function() {
	var subtotal = $("#subtotal").val()
	var tip = Number(subtotal) * 0.25
	$("#tip").val(tip.toFixed(2))
	})
})