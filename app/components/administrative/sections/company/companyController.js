angular.module('tickerApp').controller('companyController',companyController);

companyController.$inject = ['$scope','$location','companyFactory','countryFactory','cityFactory'];

function companyController($scope,$location,companyFactory,countryFactory,cityFactory){
    
    // PRIVATE FUNCTIONS 
    var requestSuccess = function () {
        notificationFactory.success();
    }
 
    var requestError = function () {
        notificationFactory.error();
    }
 
    var isNameDuplicated = function (itemName) {
        return $scope.knownItems.some(function (entry) {
            return entry.name.toUpperCase() == itemName.toUpperCase();
        });
    };
 
    var isDirty = function(item) {
        return item.name != item.serverName;
    }
 
    // PUBLIC PROPERTIES
 
    // all the items
    $scope.knownItems = [];
    // the item being added
    $scope.newCompany = { name: '', city: {city_id: ''} };
    // indicates if the view is being loaded
    $scope.loading = false;
    // indicates if the view is in add mode
    $scope.addMode = false;
 
    // PUBLIC FUNCTIONS
 
    // Toggle the grid between add and normal mode
    $scope.toggleAddMode = function () {
        $scope.addMode = !$scope.addMode;
 
        // Default new item name is empty
        $scope.newCompany.name = '';
    };
 
    // Toggle an item between normal and edit mode
    $scope.toggleEditMode = function (item) {
        // Toggle
        item.editMode = !item.editMode;
 
        // if item is not in edit mode anymore
        if (!item.editMode) {
            // Restore name
            item.name = item.serverName;
        } else {
            // save server name to restore it if the user cancel edition
            item.serverName = item.name;
 
            // Set edit mode = false and restore the name for the rest of items in edit mode 
            // (there should be only one)
            $scope.knownItems.forEach(function (i) {
                // item is not the item being edited now and it is in edit mode
                if (item.id != i.id && i.editMode) {
                    // Restore name
                    i.name = i.serverName;
                    i.editMode = false;
                }
            });
        }
    };
 
    // Creates the 'newCompany' on the server
    $scope.createCompany = function () {
        // Check if the item is already on the list
        var duplicated = isNameDuplicated($scope.newCompany.name);
 
        if (!duplicated) {
            
            $scope.loading = true;
            companyFactory.createCompany({"companyDTO":{"name": $scope.newCompany.name, "cityDTO": {"city_id":$scope.newCompany.city.city_id} }},function (createdCompany) {         
                $scope.loading = false;
            }); 
            
        } else {
            notificationFactory.error("The item already exists.");
        }
    }
 
    // Gets an item from the server using the id
    $scope.readItem = function (itemId) {
        knownItemsFactory.get({ id: itemId }, requestSuccess, requestError);
    }
 

    $scope.getAllCompanies = function () {
        $scope.loading = true;
        companyFactory.getAllCompanies(function (companies) {         
            $scope.companies = companies.companyDTOs;           
            $scope.loading = false;
        });
    };
    

    $scope.getAllCountries = function () {
        $scope.loading = true;
        countryFactory.getAllCountries(function (countries) {         
            $scope.countries = countries.countryDTOs;
            $scope.loading = false;
        });
    };
    
     $scope.grabCities = function () {
        $scope.loading = true;
        cityFactory.getAllCitiesByCountry({countryDTO: { country_id: $scope.newCompany.country.country_id }},function (cities) {        
            $scope.cities = cities.cityDTOs;
            $scope.loading = false;
        });
    };
    
 
    // Deletes an item
    $scope.deleteItem = function (item) {
        knownItemsFactory.delete({ id: item.id }, item, function (success) {
            requestSuccess();
            // Remove from scope
            var index = $scope.knownItems.indexOf(item);
            $scope.knownItems.splice(index, 1);
        }, requestError);
    }
 
    // In edit mode, if user press ENTER, update item
    $scope.updateOnEnter = function (item, args) {
        // if key is enter
        if (args.keyCode == 13) {
            $scope.updateItem(item);
            // remove focus
            args.target.blur();
        }
    };
 
    // In add mode, if user press ENTER, add item
    $scope.saveOnEnter = function (item, args) {
        // if key is enter
        if (args.keyCode == 13) {
            $scope.createItem();
            // remove focus
            args.target.blur();
        }
    };
 
        
        $scope.getAllCompanies();
        $scope.getAllCountries();        

    
}
