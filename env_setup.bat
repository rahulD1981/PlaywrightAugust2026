@echo off
REM Robust environment setup for CI
REM Changes: run from script directory, check for npm, prefer npm ci when possible, fail fast

SET SCRIPT_DIR=%~dp0
pushd "%SCRIPT_DIR%"

where npm >nul 2>&1
if errorlevel 1 (
	echo npm not found in PATH. Please install Node.js/npm on the agent.
	popd
	exit /b 1
)

if exist package-lock.json (
	echo package-lock.json found — running npm ci
	npm ci || (
		echo npm ci failed
		popd
		exit /b 1
	)
) else (
	echo No package-lock.json — running npm install
	npm install || (
		echo npm install failed
		popd
		exit /b 1
	)
)

echo Installing Allure Playwright integration (devDependency)
npm install -D allure-playwright || (
	echo failed to install allure-playwright
	popd
	exit /b 1
)

echo Installing Allure CLI (global)
npm install -g allure-commandline --force || (
	echo failed to install allure-commandline
	popd
	exit /b 1
)

echo Installing Playwright package
npm install playwright || (
	echo failed to install playwright
	popd
	exit /b 1
)

popd
exit /b 0