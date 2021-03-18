export default  [
    {
        name : 'Super Admin',
        role : 'super_admin',
        icon : 'fa-mask',
        children : [
            {
                name : "Tenant",
                icon : 'fa-building',
                url : '/admin/list_tenant'
            },
            {
                name : "Subscription",
                icon : 'fa-map',
                url : '/admin/list_subscriptions'
            },
            {
                name : "Tenant Subscription",
                icon : 'fa-id-badge',
                url : '/admin/list_tenant_subscriptions'
            },
            // {
            //     name : "User",
            //     icon : 'fa-user',
            //     url : '/admin/list_users'
            // },
            {
                name : "Package",
                icon : 'fa-align-left',
                url : '/admin/list_packages'
            },
            {
                name : "Module",
                icon : 'fa-align-center',
                url : '/admin/list_modules'
            },
        ]
    },
    {
        name : 'Admin Masters',
        role : 'admin',
        icon : 'fa-user-shield',
        children : [
            {
                name : "Batch",
                icon : 'fa-swatchbook',
                url : '/masters/list_batchs'
            },
            {
                name : "Branch",
                icon : 'fa-code-branch',
                url : '/masters/list_branchs'
            },
            {
                name : "Membership",
                icon : 'fa-hat-cowboy',
                url : '/masters/list_memberships'
            },
            {
                name : "Nutritions",
                icon : 'fa-utensils',
                url : '/masters/list_nutritions'
            },
            {
                name : "Designation",
                icon : 'fa-users',
                url : '/masters/list_designations'
            },
            {
                name : "Staff",
                icon : 'fa-chalkboard-teacher',
                url : '/masters/list_staffs'
            },
            {
                name : "Exercise",
                icon : 'fa-dumbbell',
                url : '/masters/list_exercises'
            },
            {
                name : "Workouts",
                icon : 'fa-bezier-curve',
                url : '/masters/list_workouts'
            },
            {
                name : "Add Less",
                icon : 'fa-percentage',
                url : '/masters/list_addless'
            },
        ]
    },
    {
        name : 'Member Tools',
        role : 'admin',
        icon : 'fa-users',
        children : [
            {
                name : 'Members',
                icon : 'fa-user',
                url : '/masters/list_members'
            },
            {
                name : 'Member Plan',
                icon : 'fa-holly-berry',
                url : '/masters/list_member_plans'
            },
        ]
    },
    {
        name : 'Transactions',
        role : 'admin',
        icon : 'fa-exchange-alt',
        children : [
            {
                name : 'Workout Assign',
                icon : 'fa-user',
                url : '/transactions/add_workout_assign'
            },
            {
                name : 'Nutritions Assign',
                icon : 'fa-cloud-meatball',
                url : '/transactions/add_nutrition_assign'
            },
        ]
    },
    {
        name : 'Accounts',
        role : 'admin',
        icon : 'fa-file-invoice-dollar',
        children : [
            {
                name : 'Fees Receipt',
                icon : "fa-file",
                url : '/transactions/add_fees_receipt'
            }
        ]
    }
]