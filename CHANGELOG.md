# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.26.0] - 2024-05-27
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `ProfileProvider` to store user profile.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): Visibility for offers and codes creator forms.

## [0.25.0] - 2024-05-27
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Capability to click `Enter` while logging in.

## [0.24.0] - 2024-05-27
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Each object list at `manage` page.
- [Marek Kurańda](https://github.com/mjkuranda): Editing and deleting users, categories and organizations.
- [Marek Kurańda](https://github.com/mjkuranda): Refreshing object list after deleting.
- [Marek Kurańda](https://github.com/mjkuranda): Inputs can be disabled.
- [Marek Kurańda](https://github.com/mjkuranda): Filtering users by organization name.
- [Marek Kurańda](https://github.com/mjkuranda): Deleting categories and organization images.
- [Marek Kurańda](https://github.com/mjkuranda): and so on...

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): `Manage` bookmark is not available for workers.
- [Marek Kurańda](https://github.com/mjkuranda): Settings subpage to Manage and settings page content moved to `/manage` page.
- [Marek Kurańda](https://github.com/mjkuranda): Settings page allows changing user email and password.
- [Marek Kurańda](https://github.com/mjkuranda): `/manage/:object` allows displaying creator for a specific object, e.g. organizations, users etc.
- [Marek Kurańda](https://github.com/mjkuranda): InputString can contain password as well.

## [0.23.1] - 2024-05-18
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Option to `TopBar` dropdown.
- [Marek Kurańda](https://github.com/mjkuranda): View for `/transactions` page.
- [Marek Kurańda](https://github.com/mjkuranda): View for `/transactions/:id` page.

## [0.23.0] - 2024-05-16
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `/transactions` page to render all user's transactions.
- [Marek Kurańda](https://github.com/mjkuranda): `/transactions/:id` page to render transaction details information.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): `src/app/api` directory to `src/api`.

## [0.22.2] - 2024-05-15
### Fixed
- [Marek Kurańda](https://github.com/mjkuranda): The most of the errors related to fetching images or to request in general.

## [0.22.1] - 2024-05-15
### Fixed
- [Marek Kurańda](https://github.com/mjkuranda): Error related to `sessionStorage` at main page.

## [0.22.0] - 2024-05-15
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `Loader` component.
- [Marek Kurańda](https://github.com/mjkuranda): `Loader`s to appropriate places in app.
- [Marek Kurańda](https://github.com/mjkuranda): `SettingsCreatorContext` to store loading state while submitting any creator form.

## [0.21.0] - 2024-05-15
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `/manage` subpage.
- [Marek Kurańda](https://github.com/mjkuranda): Creators for `categories`.
- [Marek Kurańda](https://github.com/mjkuranda): `InputNumber` component.
- [Marek Kurańda](https://github.com/mjkuranda): `InputImage` component.
- [Marek Kurańda](https://github.com/mjkuranda): `InputDate` component.
- [Marek Kurańda](https://github.com/mjkuranda): Creator for `offers` at shop subpage.
- [Marek Kurańda](https://github.com/mjkuranda): `/organizations/:name/offers/:id` subpage.
- [Marek Kurańda](https://github.com/mjkuranda): displaying and adding new codes to the offer.

## [0.20.0] - 2024-05-14
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `/categories/:name` page for rendering shops per category.
- [Marek Kurańda](https://github.com/mjkuranda): `/organizations/:name/offers` page for rendering offers per organization.

## [0.18.0] - 2024-05-11
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoint for getting shops.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing organization images.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Model type for getting shops.

### Changed
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoint for getting offers.

## [0.17.0] - 2024-05-11
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing transactions.

### Changed
- [Kamil Wojciechowski](https://github.com/kmlwoj): Few model types for the offers.

## [0.16.0] - 2024-05-08
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing offers.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing discounts.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing offer codes.

### Changed
- [Kamil Wojciechowski](https://github.com/kmlwoj): Optionality of various endpoint types.

## [0.15.1] - 2024-05-08
### Added
- [Marek Kurańda](https://github.com/mjkuranda): User profile management.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): Login system.

## [0.15.0] - 2024-05-06
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Redirecting to settings page.
- [Marek Kurańda](https://github.com/mjkuranda): Various creators for settings page.

## [0.14.0] - 2024-04-27
### Added
- [Jan Pękala](https://github.com/JohnyProduction): connect the login page to the home page.
- [Jan Pękala](https://github.com/JohnyProduction): add submenu for logged user

## [0.13.0] - 2024-04-26
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints for managing categories.

## [0.12.0] - 2024-04-24
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoint for getting current user data.

## [0.11.1] - 2024-04-24
### Fixed
- [Marek Kurańda](https://github.com/mjkuranda): Small fixes.

## [0.11.0] - 2024-04-24
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `react-toastify` library.

## [0.10.0] - 2024-04-22
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints and types for organization management methods.

## [0.9.0] - 2024-04-22
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `InputSelect` component.

## [0.8.0] - 2024-04-21
### Added
- [Jan Pękala](https://github.com/JohnyProduction): Add Login page.

## [0.7.0] - 2024-04-18
### Added
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints and types for login methods.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Endpoints and types for user methods.
- [Kamil Wojciechowski](https://github.com/kmlwoj): Factory file for handling endpoint errors.

## [0.6.1] - 2024-04-18
### Changed
- [Marek Kurańda](https://github.com/mjkuranda): First paragraph in `README.md` file.

### Removed
- [Marek Kurańda](https://github.com/mjkuranda): Commented style code in styles.

## [0.6.0] - 2024-04-18
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Product id page.
- [Marek Kurańda](https://github.com/mjkuranda): `InputCounter` and `RectangularButton` components.
- [Marek Kurańda](https://github.com/mjkuranda): `bg-color` as new property for all buttons.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): `Other product container` as a separate component.

## [0.5.0] - 2024-04-18
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Contact us form page.
- [Marek Kurańda](https://github.com/mjkuranda): `InputString`, `InputTextarea` and `OblongButton` components.

## [0.4.0] - 2024-04-17
### Added
- [Marek Kurańda](https://github.com/mjkuranda): Not found page.

## [0.3.0] - 2024-04-17
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `PageBox` component to insert horizontal margin for page.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): Application name to `Loyalty Application` and description.

## [0.2.0] - 2024-04-08
### Added
- [Marek Kurańda](https://github.com/mjkuranda): `Button` common components with sizes: `small`, `normal` and `big`.
- [Marek Kurańda](https://github.com/mjkuranda): Missing images to main page.

### Changed
- [Marek Kurańda](https://github.com/mjkuranda): styling of some components attached to main page.

## [0.1.0] - 2024-04-08
### Added
- [Marek Kurańda](https://github.com/mjkuranda): initial version of main page.
- [Marek Kurańda](https://github.com/mjkuranda): common components: `header` and `footer`.

## [0.0.0] - 2024-03-05
### Added
- [Jan Pękala](https://github.com/JohnyProduction): initial application.
