<template>
	<div class="type-filter">
		<el-dropdown :hide-on-click="false">
			<el-button>{{ stayTypePreview }}<i class="el-icon-arrow-down el-icon--right"></i></el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>
					<el-checkbox-group v-model="filterBy.types" class="type-list">
						<el-checkbox
							v-for="(type, idx) in stayTypeList"
							:key="idx"
							:label="type"
							class="checkbox"
							>{{ type }}</el-checkbox
						>
					</el-checkbox-group>
					<div class="filter-buttons">
						<el-button type="sucsess" @click="setFilter">Update</el-button>
					</div>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
