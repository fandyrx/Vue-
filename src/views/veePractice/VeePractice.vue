<template>
	<div>
    <!-- 组件   传 rules   插槽位置 -->
			<ValidationProvider rules="even" v-slot="{ errors }">
        <!-- input 绑定数据   类型？     -->
				<input v-model="value" type="number" placeholder="type something" />
				<span>{{ errors[0] }}</span>
        <!-- 错误信息？ -->
			</ValidationProvider>
	
	</div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";

export default {
	name: "VeePractice",
	data() {
		return {
			value: "",
		};
	},
	components: {
		ValidationProvider,
	},

	mounted() {},
};
</script>

<style scoped></style>
